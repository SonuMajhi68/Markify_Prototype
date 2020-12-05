import React from "react";

import "./Menu.scss";

export default function Menu() {
  function myFunction(elem) {
    // let show = document.getElementsByClassName("submenu")[0];
    // show.classList.toggle("show");

    console.log(elem);
  }

  // Close the dropdown if the user clicks outside of it
  //   window.onclick = function (event) {
  //     if (!event.target.matches(".dropbtn")) {
  //       var dropdowns = document.getElementsByClassName("dropdown-content");
  //       var i;
  //       for (i = 0; i < dropdowns.length; i++) {
  //         var openDropdown = dropdowns[i];
  //         if (openDropdown.classList.contains("show")) {
  //           openDropdown.classList.remove("show");
  //         }
  //       }
  //     }
  //   };
  function display_preview()
  {
    const preview_pane = document.getElementsByClassName("workspace_preview");
    preview_pane.style.width = "40%";
  }
  return (
    <ul className="mainmenu">
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[0].firstElementChild
          )
        }
      >
        File
        <ul className="submenu">
          <li>New File</li>
          <li>New File</li>
          <li>New File</li>
          <li>New File</li>
        </ul>
      </li>
      <li
        className="menu"
        onClick={() =>
          myFunction(
            document.getElementsByClassName("menu")[0].firstElementChild
          )
        }
      >
        Edit
        <ul className="submenu">
          <li>New File</li>
        </ul>
      </li>
      <li className="menu_actions" onClick={()=>display_preview()}>
        Preview
      </li>
    </ul>
  );
}
