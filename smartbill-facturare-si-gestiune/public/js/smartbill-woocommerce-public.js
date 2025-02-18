(function ($) {
    'use strict';

    /**
    * SmartBill checkout changes.
    *
    * This file adds different functionalities to the checkout (woocommerce) page.
    *
    * @link   /public/js/smartbill-woocommerce-public.js
    * @author Intelligent IT SRL <vreauapi@smartbill.ro>.
    * @since  1.0.0
    */
    $(document).ready(function () {
        try {
            let sectors = [
                "sector1", "sector2", "sector3", "sector4", "sector5", "sector6",
                "1", "2", "3", "4", "5", "6", "s1", "s2", "s3", "s4", "s5", "s6",
                "sec1", "sec2", "sec3", "sec4", "sec5", "sec6",
                "sect1", "sect2", "sect3", "sect4", "sect5", "sect6"
            ]; 
            if ($('select#billing_state').val() == "B" && $('select#billing_country').val() == "RO") {
                if ($('input#billing_city').val() != "" && smartbill_billing.loc_checks === "1") {
                    if (!sectors.includes($('input#billing_city').val().replace(/[^A-Za-z0-9]/g, '').toLowerCase())){
                        $('input#billing_city').val("");
                    }
                }
                $('input#billing_city').attr("placeholder", "Sector 1, Sector 2 etc.");
            } 

            $('select#billing_state').on('change', function (e) {
                if (this.value == "B" && $('select#billing_country').val() == "RO") {
                    if ($('input#billing_city').val() != "" && smartbill_billing.loc_checks === "1") {
                        if (!sectors.includes($('input#billing_city').val().replace(/[^A-Za-z0-9]/g, '').toLowerCase())) {
                            $('input#billing_city').val("");
                        }
                    }
                    $('input#billing_city').attr("placeholder", "Sector 1, Sector 2 etc.");
                }else{
                    $('input#billing_city').attr("placeholder", "");
                }

            });

            $('select#billing_country').on('change', function (e) {
                if (this.value == "B" && $('select#billing_country').val() == "RO") {
                    if ($('input#billing_city').val() != "" && smartbill_billing.loc_checks === "1") {
                        if (!sectors.includes($('input#billing_city').val().replace(/[^A-Za-z0-9]/g, '').toLowerCase())) {
                            $('input#billing_city').val("");
                        }
                    }
                    $('input#billing_city').attr("placeholder", "Sector 1, Sector 2 etc.");
                } else {
                    $('input#billing_city').attr("placeholder", "");
                }

            });


            //Check if smartbill setting is enabled.
            if (smartbill_billing.billing === "1") {

                //Hide/show billing fields. 
                if ('pj' == $("#smartbill_billing_type").val()) {
                    $("#billing_company_field").css("display", 'none');
                    $("#smartbill_billing_cnp_field").css("display", 'none');
                }
                if ('pf' == $("#smartbill_billing_type").val()) {
                    $("#smartbill_billing_cif_field").css("display", 'none');
                    $("#smartbill_billing_company_name_field").css("display", 'none');
                    $("#smartbill_billing_nr_reg_com_field").css("display", 'none');
                    $("#smartbill_billing_cnp_field").css("display", 'block');
                }
                $("#smartbill_billing_type").change(function () {
                    if ('pj' == $(this).val()) {
                        $("#billing_company_field").css("display", 'none');
                        $("#smartbill_billing_cif_field").css("display", 'block');
                        $("#smartbill_billing_company_name_field").css("display", 'block');
                        $("#smartbill_billing_nr_reg_com_field").css("display", 'block');
                        $("#smartbill_billing_cnp_field").css("display", 'none');
                    } else {
                        $("#billing_company_field").css("display", 'block');
                        $("#smartbill_billing_cif_field").css("display", 'none');
                        $("#smartbill_billing_company_name_field").css("display", 'none');
                        $("#smartbill_billing_nr_reg_com_field").css("display", 'none');
                        $("#smartbill_billing_cnp_field").css("display", 'block');
                    }
                });

                //Hide/show shipping fields. 
                if ('pj' == $("#smartbill_shipping_type").val()) {
                    $("#shipping_company_field").css("display", 'none');
                    $("#smartbill_shipping_cnp_field").css("display", 'none');
                }
                if ('pf' == $("#smartbill_shipping_type").val()) {
                    $("#smartbill_shipping_cif_field").css("display", 'none');
                    $("#smartbill_shipping_company_name_field").css("display", 'none');
                    $("#smartbill_shipping_nr_reg_com_field").css("display", 'none');
                    $("#smartbill_shipping_cnp_field").css("display", 'block');
                }
                $("#smartbill_shipping_type").change(function () {
                    if ('pj' == $(this).val()) {
                        $("#shipping_company_field").css("display", 'none');
                        $("#smartbill_shipping_cif_field").css("display", 'block');
                        $("#smartbill_shipping_company_name_field").css("display", 'block');
                        $("#smartbill_shipping_nr_reg_com_field").css("display", 'block');
                        $("#smartbill_shipping_cnp_field").css("display", 'none');
                    } else {
                        $("#shipping_company_field").css("display", 'block');
                        $("#smartbill_shipping_cif_field").css("display", 'none');
                        $("#smartbill_shipping_company_name_field").css("display", 'none');
                        $("#smartbill_shipping_nr_reg_com_field").css("display", 'none');
                        $("#smartbill_shipping_cnp_field").css("display", 'block');
                    }
                });

                //Coppy values to shipping if ship to different address is enabled.
                $('#ship-to-different-address-checkbox').change(function () {
                    if ($(this).is(":checked")) {
                        if ('pj' == $('#smartbill_billing_type').find(":selected").val()) {
                            $("#shipping_company_field").css("display", 'none');
                            $("#smartbill_shipping_cif_field").css("display", 'block');
                            $("#smartbill_shipping_company_name_field").css("display", 'block');
                            $("#smartbill_shipping_nr_reg_com_field").css("display", 'block');
                            $("#smartbill_shipping_cnp_field").css("display", 'none');
                        } else {
                            $("#shipping_company_field").css("display", 'block');
                            $("#smartbill_shipping_cif_field").css("display", 'none');
                            $("#smartbill_shipping_company_name_field").css("display", 'none');
                            $("#smartbill_shipping_nr_reg_com_field").css("display", 'none');
                            $("#smartbill_shipping_cnp_field").css("display", 'block');
                        }

                        $("#smartbill_shipping_type option[value='" + $('#smartbill_billing_type').find(":selected").val() + "']").prop('selected', true);
                        $('#smartbill_shipping_cif').val($('#smartbill_billing_cif').val());
                        $('#smartbill_shipping_company_name').val($('#smartbill_billing_company_name').val());
                        $('#smartbill_shipping_nr_reg_com').val($('#smartbill_billing_nr_reg_com').val());
                        $('#smartbill_shipping_cnp').val($('#smartbill_billing_cnp').val());
                    }
                });

            }

        } catch (error) { }

        try {
            $("#smartbill_company_details-checkbox").on("change", function () {
                $("div.smartbill_company_details").hide();
                if ($(this).is(":checked")) {
                    $("div.smartbill_company_details").slideDown();
                }
            }).trigger("change");
        } catch (ex) { }
    });
})(jQuery);
