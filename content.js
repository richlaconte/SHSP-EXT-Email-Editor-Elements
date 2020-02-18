

const hitSave = () => {
    let saveBtn = document.getElementById("saveEmail");
    saveBtn.click();
}


const addDragAndDrops = () => {
    addOption("Divider", "<hr>");
    addOption("Spacer", "<br>");
    addOption("Social", "<h1>Social</h1>");

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

addDragAndDrops();