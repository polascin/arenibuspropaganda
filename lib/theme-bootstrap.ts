/**
 * Inline head script that applies the stored theme before paint.
 * Shared by root layout and the standalone global-not-found document.
 */
export const THEME_BOOTSTRAP_SCRIPT =
  'try{var m=localStorage.getItem("darkMode");if(m!==null)document.documentElement.setAttribute("data-theme",m==="true"?"dark":"light")}catch(e){}';
