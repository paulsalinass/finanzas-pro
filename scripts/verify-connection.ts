
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load env vars manually since we are running a script
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars: Record<string, string> = {};

envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envVars[key.trim()] = value.trim();
    }
});

const supabaseUrl = envVars['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = envVars['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('Testing Supabase connection...');
    console.log('URL:', supabaseUrl);

    // 1. Test Auth (Create a random test user)
    const testEmail = `test_${Date.now()}@example.com`;
    const testPassword = 'Password123!';

    console.log(`Attempting to sign up test user: ${testEmail}`);
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
    });

    if (authError) {
        console.error('Auth Error:', authError.message);
        return;
    }

    console.log('Auth Successful! User ID:', authData.user?.id);

    // 2. Test DB Access (Try to insert a book for this user)
    if (authData.user) {
        console.log('Attempting to create a test Book...');
        const { data: bookData, error: bookError } = await supabase
            .from('books')
            .insert({
                name: 'Test Book',
                user_id: authData.user.id
            })
            .select(); // Select to return the data

        if (bookError) {
            console.error('Database Insert Error:', bookError.message);
        } else {
            console.log('Database Insert Successful!', bookData);

            // Cleanup (optional, but good practice)
            // await supabase.from('books').delete().eq('id', bookData[0].id);
        }
    }
}

testConnection();
