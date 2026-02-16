'use client';
import React from 'react';
import InputField from "../input/InputField";
import InputTextarea from "../input/InputTextarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface TerminFormProps {
    title?: string;
}


interface ITerminInputs {
    name: string;
    email: string;
    telefonnr: string;
    message: string;
}



//___________________ Formular Validation  ________________
/**
 * @function getMaxFieldLength Gibt die max. Länge zurück und einen Fehlertext für die Formulardaten-Validation
 * @author Sebastian Weidner
 * @since 13.06.2024
 * @version 1.0
 *
 * @param maxLength Maximale Textlänge des input-Feldes
 */
const getMaxFieldLength = (maxLength: number): [number, string] => {
    const maxFieldLengthText = `Eingabefeld ist auf ${maxLength} Zeichen begrenzt`;
    return [maxLength, maxFieldLengthText];
};



// Yup-Resolver Schema
const TerminSchema = yup.object({
    name: yup.string().trim().required("Bitte geben Sie Ihren Vor- und Nachnamen an.").max(...getMaxFieldLength(50)),
    email: yup.string().trim().email("Bitte geben Sie eine gültige Email-Adresse ein.").required('Bitte geben Sie eine Email an.').max(...getMaxFieldLength(40)),
    telefonnr: yup.string().trim()
        .required("Bitte Geben Sie Ihre Telefonnummer an.")
        .matches(/^[0-9+]+$/, "Geben Sie eine gültige Telefonnummer ein.")
        .max(...getMaxFieldLength(25)),
    message: yup.string().trim().required("Bitte geben Sie Ihre Nachricht oder Ihren Terminwunsch an.").max(...getMaxFieldLength(700)),
});


const TerminForm: React.FC<TerminFormProps> = ({
    title = 'Termin anfragen',
}) => {

    const terminForm = useForm<ITerminInputs>({
        resolver: yupResolver(TerminSchema),
        // Default-Werte, um beim Zurückgehen die Daten nicht zu verlieren
        defaultValues: {}
    });


    return (
        <div className="w-full max-w-lg">
            <h3 className="text-2xl font-light text-gray-800 mb-6">{title}</h3>
            <form onSubmit={terminForm.handleSubmit(() => console.log("Formular gesendet"))}
                  className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
                <InputField id="name" label="Name" type="text"
                            autoComplete="name" fieldWidth={4}
                            register={terminForm.register("name")} error={terminForm.formState.errors.name?.message}/>
                <InputField id="email" label="Email" type="text"
                            autoComplete="email" fieldWidth={4}
                            register={terminForm.register("email")} error={terminForm.formState.errors.email?.message}/>
                <InputField id="telefonnr" label="Telefonnummer" type="tel" autoComplete="tel"
                            fieldWidth={4}
                            register={terminForm.register("telefonnr")}
                            error={terminForm.formState.errors.telefonnr?.message}/>

                <InputTextarea id="message" label="Nachricht" defaultValue=""
                               placeholder='Ihre Nachricht oder Terminwunsch'
                               textboxRows={5}
                               register={terminForm.register("message")}
                               error={terminForm.formState.errors.message?.message}/>


                {/*<button type='submit' className="w-full text-white font-medium text-lg px-12 py-3 text-center*/}
                {/*                                    transform hover:scale-102 transition-transform cursor-pointer*/}
                {/*                                    bg-gradient-to-r from-green-700 to-green-600 shadow-lg rounded-lg*/}
                {/*                                    focus:outline-none">Anfrage senden</button>*/}
                <button type='submit' className="w-full text-white font-medium text-lg px-12 py-3 text-center
                                                    transform hover:scale-102 transition-transform cursor-pointer
                                                    bg-green-600 shadow-lg rounded-lg
                                                    hover:bg-green-700 transition-colors duration-300
                                                    focus:outline-none">Anfrage senden</button>
            </form>
        </div>
    );
};

export default TerminForm;
