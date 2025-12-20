
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load env vars manually
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
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createDemoUser() {
    const email = 'demo@finanzas.com';
    const password = 'password123';

    console.log(`Creating demo user: ${email} ...`);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: 'Usuario Demo'
            }
        }
    });

    if (error) {
        if (error.message.includes('already registered')) {
            console.log('User already exists. You can log in with:');
            console.log('Email:', email);
            console.log('Password:', password);
            return;
        }
        console.error('Error creating user:', error.message);
    } else {
        console.log('User created successfully!');
        if (!data.session) {
            console.log('NOTE: Email confirmation might be required depending on your Supabase settings.');
            console.log('Check your email/terminal or Supabase dashboard.');
        }
        console.log('Email:', email);
        console.log('Password:', password);
    }
}

createDemoUser();
