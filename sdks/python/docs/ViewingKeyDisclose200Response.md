# ViewingKeyDisclose200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ViewingKeyDisclose200ResponseData**](ViewingKeyDisclose200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.viewing_key_disclose200_response import ViewingKeyDisclose200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDisclose200Response from a JSON string
viewing_key_disclose200_response_instance = ViewingKeyDisclose200Response.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDisclose200Response.to_json())

# convert the object into a dict
viewing_key_disclose200_response_dict = viewing_key_disclose200_response_instance.to_dict()
# create an instance of ViewingKeyDisclose200Response from a dict
viewing_key_disclose200_response_from_dict = ViewingKeyDisclose200Response.from_dict(viewing_key_disclose200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


