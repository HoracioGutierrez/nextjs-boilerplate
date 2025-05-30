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
        },
        'account-modal': {
            'title': 'Editar Información de la Cuenta',
            'description': 'Esta acción no se puede deshacer. Esto modificará permanentemente su cuenta.',
            'loading': 'Actualizando detalles de la cuenta',
            'success': 'Detalles de la cuenta actualizados',
            'error': 'Error al actualizar los detalles de la cuenta',
            'fields': {
                'email': {
                    'label': 'Correo Electrónico',
                    'placeholder': 'ejemplo@mail'
                },
                'phone': {
                    'label': 'Teléfono',
                    'placeholder': 'teléfono'
                },
                'first_name': {
                    'label': 'Nombre',
                    'placeholder': 'nombre'
                },
                'last_name': {
                    'label': 'Apellido',
                    'placeholder': 'apellido'
                }
            },
            'buttons': {
                'close': 'Cerrar',
                'submit': 'Guardar',
                'loading': 'Guardando'
            }
        }
    },
    'home' : {
        'button-get-started': 'Comenzar',
        'button-learn-more': 'Más información',
    },
    'signup' : {
        'title' : 'Registrarse',
        'email' : {
            'placeholder' : 'ejemplo@mail',
            'label' : 'Correo Electrónico'
        },
        'password' : {
            'placeholder' : 'contraseña',
            'label' : 'Contraseña'
        },
        'button' : 'Registrarse',
        'button-loading' : 'Registrando',
        'google' : 'Registrarse con Google'
    },
    "google-auth": "Acceder con Google",
    'signin' : {
        'title' : 'Iniciar Sesión',
        'email' : {
            'placeholder' : 'ejemplo@mail',
            'label' : 'Correo Electrónico'
        },
        'password' : {
            'placeholder' : 'contraseña',
            'label' : 'Contraseña'
        },
        'button' : 'Iniciar Sesión',
        'button-loading' : 'Iniciando Sesión',
        'google' : 'Iniciar Sesión con Google',
        'error' : {
            'unknown' : 'Ocurrió un error inesperado durante el inicio de sesión'
        },
        'forgot-password' : '¿Olvidaste tu contraseña?'
    },
    'reset-password': {
        'title': 'Restablecer Contraseña',
        'description': 'Ingresa tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.',
        'email': {
            'label': 'Correo Electrónico',
            'placeholder': 'ejemplo@mail'
        },
        'button': 'Enviar Enlace de Restablecimiento',
        'button-loading': 'Enviando Enlace de Restablecimiento',
        'confirm': {
            'title': 'Establecer Nueva Contraseña',
            'description': 'Por favor ingresa tu nueva contraseña.',
            'password': {
                'label': 'Nueva Contraseña',
                'placeholder': 'nueva contraseña'
            },
            'button': 'Actualizar Contraseña',
            'button-loading': 'Actualizando Contraseña'
        }
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
        },
        'drawer' : {
            'close': 'cerrar',
            'menu' : 'Menú'
        }
    }
} as const