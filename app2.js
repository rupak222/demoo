window.Pragati = window.Pragati || {};
  window.Pragati.common = window.Pragati.common || {};
  window.Pragati.common.shop = {
    permanent_domain: "7d4ddf-4.myshopify.com",
    currency: "INR",
    id: 85171732761,
    money_format: "Rs. {{amount}}",
  };
  window.Pragati.common.product = {
    id: 9000548991257,
    title: "Active Enzyme Laundry Stain Remover (100ml Each) (2)",
    price: 59900,
    featured_image:
      "\/\/vkcart.com\/cdn\/shop\/products\/4709734312.jpg?v=1704038081",
    variant: 47640991007001,
    all_variants: [
      {
        id: 47640991007001,
        title: "Free Size",
        option1: "Free Size",
        option2: null,
        option3: null,
        sku: "4364329189",
        requires_shipping: true,
        taxable: false,
        featured_image: null,
        available: true,
        name: "Active Enzyme Laundry Stain Remover (100ml Each) (2) - Free Size",
        public_title: "Free Size",
        options: ["Free Size"],
        price: 59900,
        weight: 0,
        compare_at_price: 100000,
        inventory_management: "shopify",
        barcode: "",
        requires_selling_plan: false,
        selling_plan_allocations: [],
      },
    ],
  };

  window.Pragati.common.metafield = {
    buy_button: {
      buttonText: "Order Now - Cash on Delivery",
      buttonAnimation: ["pulse"],
      buttonIcon: "quick_sale_major_icon",
      backgroundColor: "#000000",
      textColor: "#f9f2f2",
      borderColor: "#050a06",
      fontSize: 15,
      borderRadius: 0,
      borderWidth: 0,
      shadow: 7,
      shadowColor: "blue",
    },
    form_designer: [
      {
        id: "order_summary_field",
        name: "ORDER SUMMARY",
        data: null,
        hidden: false,
      },
      {
        id: "totals_summary_field",
        name: "TOTALS SUMMARY",
        data: {
          field1: {
            type: "TextField",
            label: "Subtotal title",
            value: "Subtotal",
          },
          field2: {
            type: "TextField",
            label: "Shipping title",
            value: "Shipping",
          },
          field3: { type: "TextField", label: "Total title", value: "Total" },
        },
        hidden: false,
      },
      {
        id: "shipping_rates_field",
        name: "SHIPPING RATES",
        data: {
          field1: {
            type: "TextField",
            label: "Title",
            value: "Shipping method",
          },
          field2: { type: "TextField", label: "Free text", value: "Free" },
        },
        hidden: true,
      },
      {
        id: "first_name_field",
        name: "First name",
        data: {
          field1: { type: "TextField", label: "Label", value: "Full name" },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "Full name",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 3,
            maxLabel: "Max Length",
            maxValue: 250,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: false,
      },
      {
        id: "last_name_field",
        name: "Last name",
        data: {
          field1: { type: "TextField", label: "Label", value: "Last Name" },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "Last Name",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 3,
            maxLabel: "Max Length",
            maxValue: 250,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: true,
      },
      {
        id: "phone_number_field",
        name: "Phone number",
        data: {
          field1: { type: "TextField", label: "Label", value: "Phone number" },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "phone number without +91",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 1,
            maxLabel: "Max Length",
            maxValue: 15,
          },
          field6: {
            type: "TextField",
            label: "Invalid phone error text",
            value: "Enter a valid phone number.",
          },
        },
        hidden: false,
      },
      {
        id: "enter_your_shipping_address_field",
        name: "Enter your shipping address",
        data: {
          field1: {
            type: "TextField",
            label: "Text",
            value: "Note - We ship only if address is complete",
          },
          field2: {
            type: "Select",
            label: "Alignment",
            value: "center",
            options: [
              { label: "Left", value: "left" },
              { label: "Center", value: "center" },
              { label: "Right", value: "right" },
            ],
          },
          field3: { type: "RangeSlider", label: "Font Size", value: 18 },
          field4: {
            type: "Select",
            label: "Font Weight",
            value: "bold",
            options: [
              { label: "Bold", value: "bold" },
              { label: "Normal", value: "normal" },
            ],
          },
        },
        hidden: false,
      },
      {
        id: "address_field",
        name: "Address",
        data: {
          field1: {
            type: "TextField",
            label: "Label",
            value: "Flat/ House no./Building/Street",
          },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "Flat/ House no./Building/Street",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 3,
            maxLabel: "Max Length",
            maxValue: 150,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: false,
      },
      {
        id: "address_2_field",
        name: "Address 2",
        data: {
          field1: {
            type: "TextField",
            label: "Label",
            value: "Area/ Road/ Sector/ Village/ Landmark",
          },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "Area/ Road/ Sector/ Village/ Landmark",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: false },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 3,
            maxLabel: "Max Length",
            maxValue: 150,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: false,
      },
      {
        id: "pincode_field",
        name: "Pincode",
        data: {
          field1: { type: "TextField", label: "Label", value: "Pincode" },
          field2: { type: "TextField", label: "Placeholder", value: "Pincode" },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 6,
            maxLabel: "Max Length",
            maxValue: 6,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
          field7: { type: "Checkbox", label: "Is Number?", checked: true },
        },
        hidden: false,
      },
      {
        id: "city_field",
        name: "City",
        data: {
          field1: { type: "TextField", label: "Label", value: "City" },
          field2: { type: "TextField", label: "Placeholder", value: "City" },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: true },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 3,
            maxLabel: "Max Length",
            maxValue: 10,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: false,
      },
      {
        id: "state_field",
        name: "State",
        data: {
          field1: { type: "TextField", label: "Label", value: "State" },
          field2: { type: "TextField", label: "Placeholder", value: "State" },
          field3: { type: "Checkbox", label: "Required", checked: true },
        },
        hidden: false,
      },
      {
        id: "email_field",
        name: "Email",
        data: {
          field1: { type: "TextField", label: "Label", value: "Email" },
          field2: { type: "TextField", label: "Placeholder", value: "Email" },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: false },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 1,
            maxLabel: "Max Length",
            maxValue: 100,
          },
          field6: {
            type: "TextField",
            label: "Invalid email error text",
            value: "Enter a valid email address.",
          },
        },
        hidden: true,
      },
      {
        id: "order_note_field",
        name: "Order Note",
        data: {
          field1: { type: "TextField", label: "Label", value: "Order Note" },
          field2: {
            type: "TextField",
            label: "Placeholder",
            value: "Order Note",
          },
          field3: { type: "Checkbox", label: "Show field icon", checked: true },
          field4: { type: "Checkbox", label: "Required", checked: false },
          field5: {
            type: "Minmax TextField",
            minLabel: "Min Length",
            minValue: 1,
            maxLabel: "Max Length",
            maxValue: 250,
          },
          field6: {
            type: "Helper TextField",
            label: "Invalid value error text",
            value: "",
            helpText:
              "If you leave this field empty the app will use your Invalid generic field error text if the customer enters an invalid value. You can edit the generic error text at the bottom of this page.",
          },
        },
        hidden: true,
      },
      {
        id: "summit_button_field",
        name: "COMPLETE ORDER",
        data: {
          field1: {
            type: "TextField",
            label: "Button text",
            value: "COMPLETE ORDER ",
          },
        },
        hidden: false,
      },
      {
        id: "payment_button_field",
        name: "PAY ONLINE",
        data: {
          field1: {
            type: "TextField",
            label: "Button text",
            value: "PAY ONLINE",
          },
        },
        hidden: true,
      },
    ], //when using | json getting "json not allowed for this object"
    form_designer2: {
      titleName: "CASH ON DELIVERY",
      hideCloseButton: false,
      hideFieldLabels: false,
      textfieldFocusColor: "textfieldfocus-blue",
      textfieldBorderRadius: 10,
      textfieldBorderWidth: "2px",
      requiredErrorText: "This field is required.",
      invalidValueErrorText: "Enter a valid value.",
    },
    states: [
      {
        name: "Andaman and Nicobar Islands",
        isoCode: "AN",
      },
      {
        name: "Andhra Pradesh",
        isoCode: "AP",
      },
      {
        name: "Arunachal Pradesh",
        isoCode: "AR",
      },
      {
        name: "Assam",
        isoCode: "AS",
      },
      {
        name: "Bihar",
        isoCode: "BR",
      },
      {
        name: "Chandigarh",
        isoCode: "CH",
      },
      {
        name: "Chhattisgarh",
        isoCode: "CT",
      },
      {
        name: "Dadra and Nagar Haveli and Daman and Diu",
        isoCode: "DH",
      },
      {
        name: "Delhi",
        isoCode: "DL",
      },
      {
        name: "Goa",
        isoCode: "GA",
      },
      {
        name: "Gujarat",
        isoCode: "GJ",
      },
      {
        name: "Haryana",
        isoCode: "HR",
      },
      {
        name: "Himachal Pradesh",
        isoCode: "HP",
      },
      {
        name: "Jammu and Kashmir",
        isoCode: "JK",
      },
      {
        name: "Jharkhand",
        isoCode: "JH",
      },
      {
        name: "Karnataka",
        isoCode: "KA",
      },
      {
        name: "Kerala",
        isoCode: "KL",
      },
      {
        name: "Ladakh",
        isoCode: "LA",
      },
      {
        name: "Lakshadweep",
        isoCode: "LD",
      },
      {
        name: "Madhya Pradesh",
        isoCode: "MP",
      },
      {
        name: "Maharashtra",
        isoCode: "MH",
      },
      {
        name: "Manipur",
        isoCode: "MN",
      },
      {
        name: "Meghalaya",
        isoCode: "ML",
      },
      {
        name: "Mizoram",
        isoCode: "MZ",
      },
      {
        name: "Nagaland",
        isoCode: "NL",
      },
      {
        name: "Odisha",
        isoCode: "OR",
      },
      {
        name: "Puducherry",
        isoCode: "PY",
      },
      {
        name: "Punjab",
        isoCode: "PB",
      },
      {
        name: "Rajasthan",
        isoCode: "RJ",
      },
      {
        name: "Sikkim",
        isoCode: "SK",
      },
      {
        name: "Tamil Nadu",
        isoCode: "TN",
      },
      {
        name: "Telangana",
        isoCode: "TG",
      },
      {
        name: "Tripura",
        isoCode: "TR",
      },
      {
        name: "Uttar Pradesh",
        isoCode: "UP",
      },
      {
        name: "Uttarakhand",
        isoCode: "UT",
      },
      {
        name: "West Bengal",
        isoCode: "WB",
      },
    ],
    phoneCode: 91,
    country: "IN",
    visibility_page: {
      form_status: true,
      hidden_add_to_cart: true,
      hidden_buy_now: true,
      max_amount: 999,
      invalid_order_total_message: "Hello world",
      shippingRates: [
        {
          id: 810364502297,
          name: "100% Free Shipping",
          price: "0.00",
          shipping_zone_id: 505969148185,
          min_order_subtotal: null,
          max_order_subtotal: null,
        },
      ],
      webPixels: [
        {
          pixel_type: "facebook_pixel",
          pixel_id: "748305367202334",
        },
      ],
      auto_state_detection: true,
      incomplete_address_feature: true,
    },
  };
