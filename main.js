import './style.css'
import LandingPage from './src/views/Landing.js'
import GeneratorPage from './src/views/Generator.js'
import DashboardPage from './src/views/Dashboard.js'

let isLoggedIn = false;
let authPendingAction = null; 

const appContent = document.querySelector('#app-content');
const navLinks = document.querySelectorAll('[data-link]');

// Element Refs
const authModal = document.getElementById('auth-modal');
const closeAuth = document.getElementById('close-auth');
const authForm = document.getElementById('auth-form');
const authToggleBtn = document.getElementById('auth-toggle-btn');
const navLoginBtn = document.getElementById('nav-login-btn');
const authGoogleBtn = document.getElementById('auth-google-btn');

let isSignUp = false;

// Auth Modal Logic
const openAuthModal = (callback) => {
  authPendingAction = callback;
  authModal.style.display = 'flex';
};

const closeAuthModal = () => {
  authModal.style.display = 'none';
  authPendingAction = null;
};

closeAuth.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) closeAuthModal();
});

authToggleBtn.addEventListener('click', () => {
  isSignUp = !isSignUp;
  document.getElementById('name-group').style.display = isSignUp ? 'block' : 'none';
  document.getElementById('auth-title').textContent = isSignUp ? 'إنشاء حساب جديد' : 'تسجيل الدخول';
  document.getElementById('auth-submit').textContent = isSignUp ? 'سجل الآن' : 'دخول';
  document.getElementById('auth-google-text').textContent = isSignUp ? 'التسجيل عبر جوجل' : 'تسجيل الدخول عبر جوجل';
  document.getElementById('auth-toggle-text').textContent = isSignUp ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟';
  authToggleBtn.textContent = isSignUp ? 'تسجيل الدخول' : 'سجل الآن';
});

const handleLoginSuccess = () => {
  isLoggedIn = true;
  closeAuthModal();
  document.querySelector('.auth-required').style.display = 'block';
  navLoginBtn.style.display = 'none';
  
  if (authPendingAction) {
    authPendingAction();
  } else {
    navigateTo('dashboard');
  }
};

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleLoginSuccess();
});
authGoogleBtn.addEventListener('click', handleLoginSuccess);

navLoginBtn.addEventListener('click', () => {
  openAuthModal(() => navigateTo('dashboard'));
});

// Simple Router Hook
export const navigateTo = (viewId) => {
  // Access control
  if (viewId === 'dashboard' && !isLoggedIn) {
     openAuthModal(() => navigateTo('dashboard'));
     return;
  }

  // Update nav active state
  navLinks.forEach(link => {
    if (link.dataset.link === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render view
  appContent.innerHTML = '';
  appContent.className = 'animate-fade-in';
  
  // Re-trigger animation
  setTimeout(() => appContent.classList.remove('animate-fade-in'), 400);

  switch (viewId) {
    case 'landing':
      appContent.appendChild(LandingPage());
      break;
    case 'generator':
      appContent.appendChild(GeneratorPage());
      break;
    case 'dashboard':
      appContent.appendChild(DashboardPage());
      break;
    default:
      appContent.appendChild(LandingPage());
  }
};

// Listen to navigation clicks
document.body.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    if (link.dataset.link === 'dashboard' && !isLoggedIn) {
      openAuthModal(() => navigateTo('dashboard'));
      return;
    }
    navigateTo(link.dataset.link);
  }

  const actionBtn = e.target.closest('[data-action]');
  if (actionBtn) {
    const actionType = actionBtn.dataset.action;
    
    if (!isLoggedIn) {
      openAuthModal(() => {
        actionHandler(actionType);
      });
    } else {
      actionHandler(actionType);
    }
  }
});

function actionHandler(actionType) {
  if (actionType === 'generate') {
    navigateTo('generator');
  } else if (actionType === 'analyze') {
    // Show a quick mock alert and go to dashboard
    alert("ميزة تحليل هوية البراند ستكون متاحة قريباً!");
  }
}

// Initial Load
navigateTo('landing');
