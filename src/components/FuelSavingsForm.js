import React from "react";
import { func } from "prop-types";
import FuelSavingsResults from "./FuelSavingsResults";
import FuelSavingsTextInput from "./FuelSavingsTextInput";
import { fuelSavings } from "../types";

const FuelSavingsForm = ({ fuelSavings, onSaveClick, onChange }) => (
  <div>
    <h2>Thoughtful thought</h2>
    <table>
      <tbody>
        <tr>
          <td>
            <label htmlFor="newMpg">Thought :</label>
          </td>
          <td>
            <FuelSavingsTextInput
              onChange={onChange}
              name="newMpg"
              value={fuelSavings.newMpg}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Date Modified</label>
          </td>
          <td>{fuelSavings.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr />

    {fuelSavings.necessaryDataIsProvidedToCalculateSavings && (
      <FuelSavingsResults savings={fuelSavings.savings} />
    )}
    <input type="submit" value="Save" onClick={onSaveClick} />
  </div>
);

FuelSavingsForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired
};

export default FuelSavingsForm;
