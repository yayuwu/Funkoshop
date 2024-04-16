import './index.css'

export default function Loader(){
    return (
        <div id="loader">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 120 170">
               <rect x="10" y="10" width="100" height="80" fill="#D9D9D9" rx="5" ry="5">
                    <animate attributeName="opacity"
                    values="0;1;0" dur="2s"
                    repeatCount="indefinite"/>
                </rect>
               <rect x="10" y="100" width="100" height="10" fill="#D9D9D9" rx="5" ry="5">
                    <animate attributeName="opacity"
                    values="0;1;0" dur="2s"
                    repeatCount="indefinite"/>
                </rect>
               <rect x="10" y="120" width="100" height="10" fill="#D9D9D9" rx="5" ry="5">
                    <animate attributeName="opacity"
                    values="0;1;0" dur="2s"
                    repeatCount="indefinite"/>
               </rect>
            </svg>
        </div>
    )
}