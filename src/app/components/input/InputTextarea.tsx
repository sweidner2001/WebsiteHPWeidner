import React from 'react';
import InputLabel from './InputLabel'
import ErrorField from "./ErrorField";

/**
 * @interface TextareaProps Datentyp
 * @author Sebastian Weidner
 * @since 08.06.2024
 * @version 1.0
 *
 * @member fieldWidth Breite des Elements, wird nichts übergeben, dann wird die volle Breite genutzt
 * @member id ID der Textarea
 * @member label Text über Textarea
 * @member placeholder Beschreibung über der Textarea
 * @member defaultValue Default-Value der Textarea
 * @member textboxRows Wie viele Zeilen sollen angezeigt werden?
 * @member required Ist das Feld ein Pflichtfeld / Eingabepflicht?
 * @member error anzuzeigende Fehlernachricht
 */
interface TextareaProps {
    fieldWidth?: number;
    id: string;
    label: string;
    placeholder:string;
    defaultValue?:string;
    textboxRows:number;
    register: any;
    error?: string;
}



/**
 * @function InputTextarea Textarea
 * @author Sebastian Weidner
 * @since 08.06.2024
 * @version 1.0
 *
 * @param TextareaProps Eigenschaften
 */
const InputTextarea: React.FC<TextareaProps> = ({...probs}) => {
    return (
        <div className={ probs.fieldWidth ? 'sm:col-span-' + probs.fieldWidth : 'col-span-full'}>
            <InputLabel htmlFor={probs.id} label={probs.label}/>
            <textarea id={probs.id} rows={probs.textboxRows} defaultValue={probs.defaultValue} placeholder={probs.placeholder}
                      {...probs.register}
                      className="px-3 py-2 block w-full
                                font-light text-gray-900 placeholder:text-gray-400
                                border-0 rounded-lg
                                ring-1 ring-inset ring-gray-300
                                focus:outline-none focus:ring-1 focus:ring-green-500"/>
            <ErrorField errorMessage={probs.error}/>
        </div>
    );
};


export default InputTextarea;