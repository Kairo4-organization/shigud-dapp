# CommitmentCreate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment** | **str** | Hex-encoded curve point | [optional] 
**blinding_factor** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.commitment_create200_response_data import CommitmentCreate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreate200ResponseData from a JSON string
commitment_create200_response_data_instance = CommitmentCreate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreate200ResponseData.to_json())

# convert the object into a dict
commitment_create200_response_data_dict = commitment_create200_response_data_instance.to_dict()
# create an instance of CommitmentCreate200ResponseData from a dict
commitment_create200_response_data_from_dict = CommitmentCreate200ResponseData.from_dict(commitment_create200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


