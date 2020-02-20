const styles = `
<style>.email-drag-item {height: 94px;}</style>
`

const spacerEditorHTML = `
<ul class="editor-spacer">
    <li class="note">
        <h3>Spacer</h3>
    </li>
    <li class="header">
        <h4>Styles</h4>
    </li>
    <li>
        <label>Height</label>
        <div class="editor-input small-values">
            <input class="editor-onkeydown editor-onchange" button-setting="verticalPadding" type="text" value="12" button-value="12">
        </div>
    </li>
    <li class="note">
        <h3><i class="icon-margin"></i>  Margin</h3>
    </li>
    <li>
        <label>Top</label>
        <div class="editor-input small-values">
            <input class="editor-onkeydown editor-onchange" button-setting="topSpacing" type="text" value="1">
        </div>
    </li>
    <li>
        <label>Bottom</label>
        <div class="editor-input small-values">
            <input class="editor-onkeydown editor-onchange" button-setting="bottomSpacing" type="text" value="1">
        </div>
    </li>
    <li class="note">
        <h3><i class="icon-border"></i> Border</h3>
    </li>
    <li>
        <label>Color</label>
        <div class="button-option colors editor-input">
            <input type="text" maxlength="6" size="6" class="content-block-pickable" button-setting="borderColor" value="rgb(132, 195, 64)" style="background: rgb(132, 195, 64);">
        </div>
    </li>
    <li>
        <label>Width</label>
        <div class="editor-input small-values">
            <input class="editor-onkeydown editor-onchange" button-setting="borderWidth" type="text" value="1" button-value="1">
        </div>
    </li>
    <li>
        <label>Corners</label>
        <div class="editor-input small-values">
            <input class="editor-onkeydown editor-onchange" button-setting="borderRadius" type="text" value="3" button-value="3">
        </div>
    </li>
</ul>
`

const hitSave = () => {
    let saveBtn = document.getElementById("saveEmail");
    saveBtn.click();
}


const addDragAndDrops = () => {
    let body = document.getElementsByTagName("body")[0];
    let styleTag = document.createElement("STYLE");
    body.appendChild(styleTag);
    styleTag.outerHTML = styles;

    addOption("Divider", "<hr>");
    addOption("Spacer", "<br>");
    addOption("Social", "<h1>Social</h1>");

    addSideBar();

    hitSave();
}

const addOption = (name, htmlToAdd) => {
    // ***************
    // Add the handles
    // ***************
    let elementList = document.getElementsByClassName("email-drag-and-drop-items")[1];

    let child = document.createElement("LI");

    let temp = `<li class="email-drag-item email-drag-content ui-draggable ui-draggable-handle" data-tpl="emailLayout-content-block-newBlocks-` + name + `" data-guid="newBlocks-` + name + `">
    <img src="/includes/img/emails/drag/content-block/text.svg" width="200">
    <div>` + name + `</div>
    </li>`;

    elementList.appendChild(child);
    child.outerHTML = temp;

    // ***************
    // Add the scripts
    // ***************
    let body = document.getElementsByTagName("BODY")[0];
    let html = `<script id="emailLayout-content-block-newBlocks-` + name + `" type="text/template">`;
    html += `
    <div sh-content-block="Button" sh-version="3" class="ui-draggable ` + name + `" style="">
                                  <!--[if !mso]><!-- --><div style="height:1px; line-height:1px; clear:both;">&nbsp;</div><!--<![endif]-->
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody><tr>
                                      <td>
    `
    html += htmlToAdd;
    html += `</td>
    </tr>
  </tbody></table>
  <!--[if !mso]><!-- --><div style="height:1px; line-height:1px; clear:both;">&nbsp;</div><!--<![endif]-->
  <div class="email-block-controls" style="display: none;">
<div class="email-block-controls-inner">
<a title="Drag to Reorder" class="single-control email-block-controls-move"><i class="icon-move"></i></a>
<a title="Edit Block" class="single-control email-block-controls-edit"><i class="icon-pencil"></i></a>
<a title="Duplicate Block" class="single-control email-block-controls-clone"><i class="icon-copy"></i></a>

<a title="Delete Block" class="single-control email-block-controls-delete"><i class="icon-trash"></i></a>
</div>
</div></div></script>`;

    let script = document.createElement("SCRIPT");
    body.appendChild(script);
    script.outerHTML = html;
}

let sideBar;
let buttonEditor;
let spacerEditor;

const addSideBar = () => {
  sideBar = document.getElementsByClassName("bc-settings")[0];
  buttonEditor = document.getElementsByClassName("editor-button")[0];
  spacerEditor = document.createElement("UL");
  sideBar.appendChild(spacerEditor);
  spacerEditor.outerHTML = spacerEditorHTML;

  buttonEditor.style.display = "none";
}

addDragAndDrops();