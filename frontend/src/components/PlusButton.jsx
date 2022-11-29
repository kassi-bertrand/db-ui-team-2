/**
 * Author:          Kassi Bertrand
 * filename:        UserEvent.jsx
 * Date:            11-13-2022
 * Description:     This component is used both
 *                  the UserEvent, and UserServices
 *                  components.
 *                  For the user to create a new event, or
 *                  a service.
 */

function PlusButton({title, setIsOpen}){
    function handleClick(){
        setIsOpen(true);
    }

    return(
        <>
            <a href="#" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full h-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 font-inter" onClick={handleClick}>
                <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                {title}
            </a>
        </>
    );
}

export default PlusButton;
