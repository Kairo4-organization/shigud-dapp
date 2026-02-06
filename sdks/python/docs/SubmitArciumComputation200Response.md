# SubmitArciumComputation200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**SubmitArciumComputation200ResponseData**](SubmitArciumComputation200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.submit_arcium_computation200_response import SubmitArciumComputation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitArciumComputation200Response from a JSON string
submit_arcium_computation200_response_instance = SubmitArciumComputation200Response.from_json(json)
# print the JSON string representation of the object
print(SubmitArciumComputation200Response.to_json())

# convert the object into a dict
submit_arcium_computation200_response_dict = submit_arcium_computation200_response_instance.to_dict()
# create an instance of SubmitArciumComputation200Response from a dict
submit_arcium_computation200_response_from_dict = SubmitArciumComputation200Response.from_dict(submit_arcium_computation200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


