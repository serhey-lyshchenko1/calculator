import ICurrency from '../type/currency.dto';

const Currency: ICurrency[] = [
    {
        title: 'USD',
        icon: 'united-states-of-america-svgrepo-com',
        priceCoefficient: 1
    },
    {
        title: 'EUR',
        icon: 'european-union-svgrepo-com',
        priceCoefficient: 1.1
    },
    {
        title: 'GBP',
        icon: 'united-kingdom-svgrepo-com',
        priceCoefficient: 1.4
    },
    {
        title: 'AUD',
        icon: 'australia-svgrepo-com',
        priceCoefficient: 0.7
    },
    {
        title: 'CAD',
        icon: 'canada-svgrepo-com',
        priceCoefficient: 0.9
    },
];

export default Currency;
