module.exports = {
  "extends": 'stylelint-config-standard',
  "plugins": [
    "stylelint-scss"
  ],
  "rules":{
    "max-nesting-depth": 7,
    "order/properties-alphabetical-order": null,
    "property-no-vendor-prefix": [
      true,
      {
        "ignoreProperties": [
          "box-orient"
        ]
      }
    ],
    "selector-class-pattern": [
      "^[a-z0-9\\-_]+$",
      {
        "message": "Selector should be written in lowercase with hyphens or underscores(selector-class-pattern)"
      }
    ],
    "selector-max-compound-selectors": 7,
    "selector-max-id": 2,
    "selector-no-qualifying-type": null,
    "value-no-vendor-prefix": [
      true,
      {
        "ignoreValues": [
          "inline-box",
          "box"
        ]
      }
    ]
  }
}
