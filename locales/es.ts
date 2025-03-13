export default {
    'hello': 'Hola',
    'dashboard': {
        'title' : 'Perfil',
        'sections': {
            'account': {
                'title': 'Cuenta'
            },
            'personal_info': {
                'title': 'Información Personal',
                'first_name': 'Nombre',
                'last_name': 'Apellido',
                'email': 'Correo Electrónico',
                'phone': 'Teléfono'
            }
        }
    },
    'home' : {
        'button-get-started': 'Comenzar',
        'button-learn-more': 'Más información',
    },
    'layout' : {
        'links' : {
            'home': 'inicio',
            'signup': 'registrarse',
            'login': 'iniciar sesión',
            'dashboard': 'perfil',
            'logout': 'salir'
        },
        'locale' : {
            'loading': 'Cambiando idioma...'
        },
        'footer' : {
            'copyright' : "Todos los derechos reservados.",
            'created_by' : "Creado por"
        }
    }
} as const