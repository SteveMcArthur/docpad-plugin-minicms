// Generated by IcedCoffeeScript 1.8.0-a
(function() {
  module.exports = function() {
    if (this.shouldLoadScript) {
      coffeescript(function() {
        return window.minicms_component_tags = function(prefix, form, name) {
          var field;
          field = $('#field-' + form + '-' + name);
          console.log(name + " = " + $('#' + form + '-form').data('fields')[name]);
          field.data('value', $('#' + form + '-form').data('fields')[name]);
          return $(document).ready(function() {
            $('#form-input-' + form + '-' + name + '--tagit').css('visibility', 'hidden');
            return setTimeout((function() {
              $('#form-input-' + form + '-' + name + '--tagit').css('visibility', 'visible');
              $('#form-input-' + form + '-' + name + '--tagit').tagit({
                availableTags: field.data('available-tags'),
                allowSpaces: true,
                caseSensitive: false,
                preprocessTag: function(val) {
                  var result, subresult, _i, _len, _ref;
                  if (!(val != null ? val.length : void 0)) {
                    return '';
                  } else {
                    result = [];
                    _ref = val.split(' ');
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                      subresult = _ref[_i];
                      if (subresult.length) {
                        result.push(subresult.charAt(0).toUpperCase() + subresult.substring(1));
                      }
                    }
                    return result.join(' ');
                  }
                },
                afterTagAdded: function(ev, ui) {
                  var val;
                  val = $('#form-input-' + form + '-' + name + '--tagit').tagit('assignedTags');
                  console.log(name + " = " + val);
                  field.data('value', val);
                  return minicms_form_update(prefix, form);
                },
                afterTagRemoved: function(ev, ui) {
                  var val;
                  val = $('#form-input-' + form + '-' + name + '--tagit').tagit('assignedTags');
                  console.log(name + " = " + val);
                  field.data('value', val);
                  return minicms_form_update(prefix, form);
                }
              });
              return minicms_form_load(prefix, form, name);
            }), 100);
          });
        };
      });
    }
    div('#field-' + this.form + '-' + this.field + '.control-group.form-component-tags', {
      'data-available-tags': (this.data instanceof Array ? h(JSON.stringify(this.data)) : '[]')
    }, function() {
      return div('.form-field-content', function() {
        label('.control-label', {
          "for": "form-input-" + this.form + "-" + this.field
        }, function() {
          return h(this.label);
        });
        return div('.controls', function() {
          return ul('#form-input-' + this.form + '-' + this.field + '--tagit.tagit-minicms', function() {
            var val, _i, _len, _ref, _results;
            if (this.value instanceof Array) {
              _ref = this.value;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                val = _ref[_i];
                _results.push(li(function() {
                  return h(val);
                }));
              }
              return _results;
            }
          });
        });
      });
    });
    return text('<script type="text/javascript">minicms_component_tags("' + this.config.prefix.url + '", "' + this.form + '", "' + this.field + '");</script>');
  };

}).call(this);
