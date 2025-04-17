export default {
    'hello': 'Hello',
    'dashboard': {
        'title' : 'Dashboard',
        'sections': {
            'account': {
                'title': 'Account'
            },
            'personal_info': {
                'title': 'Personal Info',
                'first_name': 'First Name',
                'last_name': 'Last Name',
                'email': 'Email',
                'phone': 'Phone'
            }
        },
        "account-modal": {
            'title': 'Edit Account Info',
            'description': 'This action cannot be undone. This will permanently modify your account.',
            'loading': 'Updating account details',
            'success': 'Account details updated',
            'error': 'Failed to update account details',
            'fields': {
                'email': {
                    'label': 'Email',
                    'placeholder': 'example@mail'
                },
                'phone': {
                    'label': 'Phone',
                    'placeholder': 'phone'
                },
                'first_name': {
                    'label': 'First Name',
                    'placeholder': 'first name'
                },
                'last_name': {
                    'label': 'Last Name',
                    'placeholder': 'last name'
                }
            },
            'buttons': {
                'close': 'Close',
                'submit': 'Save',
                'loading': 'Saving'
            }
        }
    },
    'home' : {
        'button-get-started': 'Get started',
        'button-learn-more': 'Learn more',
    },
    'signup' : {
        'title' : 'Sign Up',
        'email' : {
            'placeholder' : 'example@mail',
            'label' : 'Email'
        },
        'password' : {
            'placeholder' : 'password',
            'label' : 'Password'
        },
        'button' : 'Sign Up',
        'button-loading' : 'Signing up',
        'google' : 'Sign Up with Google'
    },
    "google-auth": "Access with Google",
    'signin' : {
        'title' : 'Sign In',
        'email' : {
            'placeholder' : 'example@mail',
            'label' : 'Email'
        },
        'password' : {
            'placeholder' : 'password',
            'label' : 'Password'
        },
        'button' : 'Sign In',
        'button-loading' : 'Signing in',
        'google' : 'Sign In with Google',
        'error' : {
            'unknown' : 'An unexpected error occurred during sign in'
        },
        'forgot-password' : 'Forgot your password?'
    },
    'reset-password': {
        'title': 'Reset Password',
        'description': 'Enter your email address and we will send you a link to reset your password.',
        'email': {
            'label': 'Email',
            'placeholder': 'example@mail'
        },
        'button': 'Send Reset Link',
        'button-loading': 'Sending Reset Link',
        'confirm': {
            'title': 'Set New Password',
            'description': 'Please enter your new password.',
            'password': {
                'label': 'New Password',
                'placeholder': 'new password'
            },
            'button': 'Update Password',
            'button-loading': 'Updating Password'
        }
    },
    'layout' : {
        'links' : {
            'home': 'home',
            'signup': 'sign up',
            'login': 'log in',
            'dashboard': 'dashboard',
            'logout': 'logout'
        },
        'locale' : {
            'loading': 'Changing locale...'
        },
        'footer' : {
            'copyright' : "All rights reserved.",
            'created_by' : "Created by"
        },
        'drawer' : {
            'close': 'close',
            'menu': 'Menu'
        }
    }
} as const