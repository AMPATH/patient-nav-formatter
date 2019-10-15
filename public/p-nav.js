import { fieldFormats } from 'ui/registry/field_formats';
// import { RegistryFieldFormatEditorsProvider } from 'ui/registry/field_format_editors';
import _ from 'lodash';

export function createPatientNav(FieldFormat) {
  class PatientNav extends FieldFormat {

    constructor(params) {
      super(params);
    }

    static id = 'patient-nav';
    static title = 'Patient Navigation';
    static fieldType = ['string'];

  }

  PatientNav.prototype._convert = {
    text(val) {
      return val;
    },
    html(val, field, hit) {
      let html = '';

      html = html + '<button type="button" class="euiButton euiButton--primary euiButton--small euiButton--fill" onclick="' + `
      (function onclickPatientNav() {
             console.log('Navigating to patient', '` + val + `');
             window.parent.postMessage('` + val + `', '*');       
      })();
      ` +
      '">View Patient</button>';
      return html;
    }
  };
  return PatientNav;
}

fieldFormats.register(createPatientNav);