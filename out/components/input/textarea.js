// Generated by IcedCoffeeScript 1.6.3-g
(function() {


  module.exports = function() {
    if (this.shouldLoadScript) {
      coffeescript(function() {
        return window.minicms_component_textarea = function(prefix, form, name) {
          var field;
          field = $('#field-' + form + '-' + name);
          console.log(name + " = " + $('#' + form + '-form').data('fields')[name]);
          field.data('value', $('#' + form + '-form').data('fields')[name]);
          minicms_form_load(prefix, form, name);
          return $('textarea.form-value', field).on('change', function() {
            if ($(this).val() !== field.data('value')) {
              console.log(name + " = " + $(this).val());
              field.data('value', $(this).val());
              return minicms_form_update(prefix, form);
            }
          });
        };
      });
    }
    div('#field-' + this.form + '-' + this.field + '.control-group.form-component-textarea', function() {
      return div('.form-field-content', function() {
        label('.control-label', {
          "for": "form-input-" + this.form + "-" + this.field
        }, function() {
          return h(this.label);
        });
        return div('.controls', function() {
          return textarea('#form-input-' + this.form + '-' + this.field + '.form-value.input-xlarge.no-halo', {
            style: "width:600px;height:" + (this.height ? this.height : 320) + "px",
            name: this.field
          }, function() {
            return h(this.value != null ? this.value : '');
          });
        });
      });
    });
    return text('<script type="text/javascript">minicms_component_textarea("' + this.config.prefix.url + '", "' + this.form + '", "' + this.field + '");</script>');
  };

}).call(this);
