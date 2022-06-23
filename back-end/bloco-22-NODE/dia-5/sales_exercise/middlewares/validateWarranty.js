function validateWarranty(req, res, next) {
    const { infos: { warrantyPeriod } } = res.body;

    if (warrantyPeriod === undefined) {
        res.status(400).json({ message: 'O campo warrantyPeriod é obrigatório!' })
    }

    if (warrantyPeriod < 1 || warrantyPeriod > 3) {
        res.status(400).json({ message: 'Esse não é um período válido.' })
    }

    next();
}

module.exports = validateWarranty;