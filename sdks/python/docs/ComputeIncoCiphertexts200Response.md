# ComputeIncoCiphertexts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**beta** | **bool** |  | [optional] 
**warning** | **str** |  | [optional] 
**data** | [**ComputeIncoCiphertexts200ResponseData**](ComputeIncoCiphertexts200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.compute_inco_ciphertexts200_response import ComputeIncoCiphertexts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeIncoCiphertexts200Response from a JSON string
compute_inco_ciphertexts200_response_instance = ComputeIncoCiphertexts200Response.from_json(json)
# print the JSON string representation of the object
print(ComputeIncoCiphertexts200Response.to_json())

# convert the object into a dict
compute_inco_ciphertexts200_response_dict = compute_inco_ciphertexts200_response_instance.to_dict()
# create an instance of ComputeIncoCiphertexts200Response from a dict
compute_inco_ciphertexts200_response_from_dict = ComputeIncoCiphertexts200Response.from_dict(compute_inco_ciphertexts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


