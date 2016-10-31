describe('jquery.hiding', function () {

    var $form;

    beforeEach(function () {
        $form = $('<form></form>');
        $('<input type="checkbox" class="dog_hiding">').appendTo($form);
        $('<input type="text" class="cat_hiding">').appendTo($form);
        $('<div class="dog_hideable dog">dog</div>').appendTo($form);
        $('<div class="cat_hideable cat">cat</div>').appendTo($form);
        $('<div class="dog_hideable cat_hideable animal">animal</div>').appendTo($form);
        $form.appendTo('body');
        $form.hiding();
        $form.trigger_hiding();
    });

    afterEach(function () {
        $form.remove();
    });

    it('hides items initially', function() {
        expect($(".dog").is(':visible')).toBeFalsy();
        expect($(".cat").is(':visible')).toBeFalsy();
        expect($(".animal").is(':visible')).toBeFalsy();
    });

    it('hides corresponding items when checkbox is clicked', function() {
        $(".dog_hiding").prop('checked', true).trigger('click');
        expect($(".dog").is(':visible')).toBeTruthy();
        expect($(".cat").is(':visible')).toBeFalsy();
        expect($(".animal").is(':visible')).toBeTruthy();
    });

    it('hides corresponding items when text input is typed in', function() {
        $(".cat_hiding").val('value').trigger('keyup');
        expect($(".dog").is(':visible')).toBeFalsy();
        expect($(".cat").is(':visible')).toBeTruthy();
        expect($(".animal").is(':visible')).toBeTruthy();
    });

});