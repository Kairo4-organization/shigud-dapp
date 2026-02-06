# ProofsFundingGenerate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proof** | [**ProofsFundingGenerate200ResponseDataProof**](ProofsFundingGenerate200ResponseDataProof.md) |  | [optional] 
**public_inputs** | **List[str]** |  | [optional] 

## Example

```python
from sipher_client.models.proofs_funding_generate200_response_data import ProofsFundingGenerate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsFundingGenerate200ResponseData from a JSON string
proofs_funding_generate200_response_data_instance = ProofsFundingGenerate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ProofsFundingGenerate200ResponseData.to_json())

# convert the object into a dict
proofs_funding_generate200_response_data_dict = proofs_funding_generate200_response_data_instance.to_dict()
# create an instance of ProofsFundingGenerate200ResponseData from a dict
proofs_funding_generate200_response_data_from_dict = ProofsFundingGenerate200ResponseData.from_dict(proofs_funding_generate200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


