// Data for countries and their corresponding provinces/states/departments
export const COUNTRIES = [
    { code: 'Peru', name: 'Perú' },
    { code: 'Mexico', name: 'México' },
    { code: 'Colombia', name: 'Colombia' },
    { code: 'Argentina', name: 'Argentina' },
    { code: 'Spain', name: 'España' },
    { code: 'USA', name: 'Estados Unidos' },
    { code: 'Chile', name: 'Chile' },
    { code: 'Ecuador', name: 'Ecuador' }
];

export const LOCATIONS: Record<string, string[]> = {
    'Peru': [
        'Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Piura', 'Iquitos', 'Huancayo', 'Tacna', 'Pucallpa'
    ],
    'Mexico': [
        'Ciudad de México', 'Jalisco', 'Nuevo León', 'Puebla', 'Guanajuato', 'Veracruz', 'Yucatán', 'Quintana Roo', 'Baja California', 'Chihuahua'
    ],
    'Colombia': [
        'Bogotá', 'Antioquia', 'Valle del Cauca', 'Cundinamarca', 'Atlántico', 'Santander', 'Bolívar', 'Magdalena', 'Nariño', 'Tolima'
    ],
    'Argentina': [
        'Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Entre Ríos', 'Salta', 'Misiones', 'Chaco', 'Corrientes'
    ],
    'Spain': [
        'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Alicante', 'Málaga', 'Murcia', 'Cádiz', 'Vizcaya', 'A Coruña'
    ],
    'USA': [
        'California', 'Texas', 'Florida', 'New York', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
    ],
    'Chile': [
        'Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Temuco', 'Rancagua', 'Talca', 'Arica', 'Iquique'
    ],
    'Ecuador': [
        'Guayas', 'Pichincha', 'Azuay', 'Manabí', 'El Oro', 'Loja', 'Tungurahua', 'Imbabura', 'Cotopaxi', 'Los Ríos'
    ]
};

export const CITY_COORDINATES: Record<string, { lat: number, lng: number }> = {
    // Peru
    'Lima': { lat: -12.0464, lng: -77.0428 },
    'Arequipa': { lat: -16.4090, lng: -71.5375 },
    'Cusco': { lat: -13.5320, lng: -71.9675 },
    'Trujillo': { lat: -8.1160, lng: -79.0300 },
    'Piura': { lat: -5.1945, lng: -80.6328 },
    // Mexico
    'Ciudad de México': { lat: 19.4326, lng: -99.1332 },
    'Guadalajara': { lat: 20.6597, lng: -103.3496 },
    'Monterrey': { lat: 25.6866, lng: -100.3161 },
    // Colombia
    'Bogotá': { lat: 4.7110, lng: -74.0721 },
    'Medellín': { lat: 6.2442, lng: -75.5812 },
    // Argentina
    'Buenos Aires': { lat: -34.6037, lng: -58.3816 },
    'Córdoba': { lat: -31.4201, lng: -64.1888 },
    // Spain
    'Madrid': { lat: 40.4168, lng: -3.7038 },
    'Barcelona': { lat: 41.3851, lng: 2.1734 },
    // USA
    'New York': { lat: 40.7128, lng: -74.0060 },
    'San Francisco': { lat: 37.7749, lng: -122.4194 }
};
