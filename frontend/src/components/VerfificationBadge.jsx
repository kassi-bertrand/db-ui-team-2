/**
 * Author:          Kassi Bertrand
 * filename:        VerificationBadge.jsx
 * Date:            11-13-2022
 * Description:     This component is used to display a
 *                  verification badge next to registered
 *                  users name. I thought it'd be cool :)
 *                  This component is used in the FeedCard,
 *                  EventCard, and ServiceCard (maybe) components
 */

function VerificationBadge(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
    );
}

export default VerificationBadge;