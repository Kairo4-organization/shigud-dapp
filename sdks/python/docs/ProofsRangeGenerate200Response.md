# ProofsRangeGenerate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**ProofsRangeGenerate200ResponseData**](ProofsRangeGenerate200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.proofs_range_generate200_response import ProofsRangeGenerate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProofsRangeGenerate200Response from a JSON string
proofs_range_generate200_response_instance = ProofsRangeGenerate200Response.from_json(json)
# print the JSON string representation of the object
print(ProofsRangeGenerate200Response.to_json())

# convert the object into a dict
proofs_range_generate200_response_dict = proofs_range_generate200_response_instance.to_dict()
# create an instance of ProofsRangeGenerate200Response from a dict
proofs_range_generate200_response_from_dict = ProofsRangeGenerate200Response.from_dict(proofs_range_generate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


