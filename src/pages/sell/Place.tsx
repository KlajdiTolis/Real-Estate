import React, { FC } from 'react'
import { Autocomplete, TextField } from "@mui/material"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

interface Props {
    setSelected: any
}

const PlacesAutocomplete: FC<Props> = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    return (
        <Combobox onSelect={async (address:any) => {
            try {
                const results = await getGeocode({ address })
                const {lat ,lng}= await getLatLng(results[0])
                console.log(lat ,lng);
                console.log(results[0]);
            } catch (error) {
                console.log(error);
            }
        }
        }>
            <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Search an address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};
export default PlacesAutocomplete