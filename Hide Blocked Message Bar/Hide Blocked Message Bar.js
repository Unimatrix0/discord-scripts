/*-------------------------------------
//
// Discord Script by Stephen Chapman
// GitHub: http://github.com/dsasmblr
// Blog: http://dsasmblr.com/blog
//
// Updated for 2020 by Unimatrix0
// GitHub https://github.com/Unimatrix0
//
-------------------------------------*/

// Description: This script hides the "blocked message" div.

/* -- SCRIPT START -- */

// Recursive IIFE (Immediately-Invoked Function Expression)
(function hideBlocked(){
	// Find all elements with class containing blockedSystemMessage
	document.querySelectorAll('div[class*="blockedSystemMessage"]')
	
	// For each element found, apply an inline style that hides that element's 3rd level parent
	.forEach(div => div.parentElement.parentElement.parentElement.setAttribute("style", "display: none;"));

	// Run again every half-second 
	setTimeout(hideBlocked,500);
})();
