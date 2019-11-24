const country_info = require('../models').country_info;

exports.index = async (req, res) => {
    try {
        const countries = await country_info.findAll({
            attributes: ["id", "country_name", "official_name_english", "iso3166_1_alpha_2", "iso3166_1_alpha_3", "dial", "fifa", "iso4217_currency_alphabetic_code", "iso4217_currency_country_name", "iso4217_currency_minor_unit", "iso2417_currency_name", "iso4217_currency_numeric_code",
                "is_independent", "capital", "continent", "tld", "languages", "geo_name_id"]
        });
        if (!countries) return res.status(400).json({msg: 'Something else!'});

        return res.status(200).json(countries);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({msg: 'Server Error!'});
    }
};