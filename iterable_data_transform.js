function transformObject(input) {
  // Initialize the output object
  const output = {
    attributes: [
      {
        external_id: input.userId,
        _update_existing_only: true
      }
    ]
  };

  // Check if dataFields exists and is an object
  if (input.dataFields && typeof input.dataFields === 'object') {
    // Add all keys/values from dataFields into the attributes object
    Object.assign(output.attributes[0], input.dataFields);
  }

  return output; n
}



const transformedObject = transformObject(payload);
const attributes = transformedObject.attributes


let brazecall = {
  attributes
};

// After the /users/track request is assigned to brazecall, you will want to explicitly return brazecall to create an output
return brazecall;
