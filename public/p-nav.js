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
    static fieldType = [
      'string'
    ];

  }

  PatientNav.prototype._convert = {
    text(val) {
      return val;
    },
    html(val, field, hit) {
      // console.log('Passed values', val, field, hit);
      let html = '';
      // html += `
      //   <script type="text/javascript>
      //   function onclickPatientNav() {
      //     console.log('button clicked');
      //   }
      //   </script>
      // `;
      html = html + '<button type="button" class="btn btn-default" onclick="' + `
      (function onclickPatientNav() {
             console.log('Navigating to patient', '` + val + `');
             window.parent.postMessage('` + val + `', '*');       
      })();
      ` +
      '">View Patient</button>';

      // console.log('=======>', html);
      return html;
    }
  };
  return PatientNav;
}

fieldFormats.register(createPatientNav);