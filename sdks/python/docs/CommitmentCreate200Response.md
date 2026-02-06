# CommitmentCreate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CommitmentCreate200ResponseData**](CommitmentCreate200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.commitment_create200_response import CommitmentCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreate200Response from a JSON string
commitment_create200_response_instance = CommitmentCreate200Response.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreate200Response.to_json())

# convert the object into a dict
commitment_create200_response_dict = commitment_create200_response_instance.to_dict()
# create an instance of CommitmentCreate200Response from a dict
commitment_create200_response_from_dict = CommitmentCreate200Response.from_dict(commitment_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


