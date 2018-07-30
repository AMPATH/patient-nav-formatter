import { resolve } from 'path';


export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana'],
    name: 'patient-nav',
    uiExports: {

      fieldFormats: ['plugins/patient-nav/p-nav'],


      translations: [
        resolve(__dirname, './translations/es.json')
      ],


      hacks: [
        'plugins/patient-nav/hack'
      ]

    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },



  });
}
