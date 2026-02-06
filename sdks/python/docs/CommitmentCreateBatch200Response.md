# CommitmentCreateBatch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CommitmentCreateBatch200ResponseData**](CommitmentCreateBatch200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.commitment_create_batch200_response import CommitmentCreateBatch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCreateBatch200Response from a JSON string
commitment_create_batch200_response_instance = CommitmentCreateBatch200Response.from_json(json)
# print the JSON string representation of the object
print(CommitmentCreateBatch200Response.to_json())

# convert the object into a dict
commitment_create_batch200_response_dict = commitment_create_batch200_response_instance.to_dict()
# create an instance of CommitmentCreateBatch200Response from a dict
commitment_create_batch200_response_from_dict = CommitmentCreateBatch200Response.from_dict(commitment_create_batch200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


