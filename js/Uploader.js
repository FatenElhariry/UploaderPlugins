(function ($) {
    $.fn.Uploader = function (userOptions) {
        var initialCode;
        var newCode;
        var title = $(this).attr('title') ? $(this).attr('title') : "";
        var $DOMBody = $("body", document);

        var defaults = {
            class: "fa fa-upload",
            img: "",
            multiple: false,
            title:title

        }


        var options = $.extend({}, defaults, userOptions);
        
        initialCode = this.html();
        var controlName = $(this).addClass("hidden").attr("name");
        var wrapperName = "wrapper-Uploader-" + controlName;
        newCode = `<div style='display:inline-block;' ><div class='wrapper-Uploader' title='${options.title}' id='${wrapperName}'>
                    <a href="javascript:;"  class="wrapper-Uploader thumbnail text-center">
                        <i class="fa fa-upload" aria-hidden="true"></i>
                    </a >
                    </div >
                    <span id='fileName-${controlName}' class='hidden'> </span><button type="button" class="hidden" id="uploader-dismiss-${controlName}" class="close" data-dismiss="Uploader" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                   `
            ;

        $(this).empty();
        $(this).after(newCode);
        $this = this;

        $("#" + wrapperName).on("click", function () {
            $($this).click();
        });
        $(this).on("change",function (event){
            if($(this).val())
            {
                $("#uploader-dismiss-"+controlName).removeClass("hidden");
            }
            else 
                $("#uploader-dismiss-"+controlName).addClass("hidden");  
            $("#fileName-"+controlName).text($(this).val() ).removeClass('hidden');
        });
        $(document).on('click',"button[data-dismiss='Uploader']",function(){
            //$("#fileName-"+controlName).text('').addClass("hidden");
            $(this).addClass("hidden")
            $($this).val('').change();
        });

        return this;
    }
    

})(jQuery)