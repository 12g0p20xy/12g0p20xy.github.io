// 表格管理
var table = jQuery('#sample_editable_1')
    tableWrapper = jQuery('#sample_editable_1_wrapper');

table.find('.group-checkable').change(function () {
    var set = jQuery(this).attr("data-set");
    var checked = jQuery(this).is(":checked");
    jQuery(set).each(function () {
        if (checked) {
            $(this).attr("checked", true);
            $(this).parents('tr').addClass("active");
        } else {
            $(this).attr("checked", false);
            $(this).parents('tr').removeClass("active");
        }
    });
    jQuery.uniform.update(set);
});

table.on('change', 'tbody tr .checkboxes', function () {
    $(this).parents('tr').toggleClass("active");
});

tableWrapper.find('.dataTables_length select').addClass("form-control input-xsmall input-inline"); // modify table per page dropdown

// 条件搜索
var filterBtn = $('.filter-btn'),
    filterWrap = $('.filter-wrap');
filterBtn.on('click', function(event) {
    event.preventDefault();
    filterWrap.slideToggle(300);
});