import React from 'react';

interface IService {
    title: string;
    description: string;
}

const services: IService[] = [
    {
        title: 'Pflanzenheilkunde',
        description: 'Behandlung mit Heilpflanzen und deren Extrakten zur Unterstützung der natürlichen Heilungsprozesse.'
    },
    {
        title: 'Ernährungsberatung',
        description: 'Individuelle Ernährungspläne zur Stärkung des Immunsystems und Behandlung ernährungsbedingter Beschwerden.'
    },
    {
        title: 'Ausleitende Verfahren',
        description: 'Methoden zur Entgiftung und Entschlackung des Körpers für mehr Vitalität und Wohlbefinden.'
    },
    {
        title: 'Homöopathie',
        description: 'Individuell abgestimmte homöopathische Mittel zur gezielten Behandlung verschiedener Beschwerden.'
    }
];

const Services = () => {
    return (
        <section id="leistungen" className="py-20 bg-green-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light text-gray-800 mb-4">Unsere Leistungen</h2>
                    <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index}
                             className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-light text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 font-light">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
