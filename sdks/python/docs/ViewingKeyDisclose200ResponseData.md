# ViewingKeyDisclose200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **str** |  | [optional] 
**nonce** | **str** |  | [optional] 
**viewing_key_hash** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.viewing_key_disclose200_response_data import ViewingKeyDisclose200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDisclose200ResponseData from a JSON string
viewing_key_disclose200_response_data_instance = ViewingKeyDisclose200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDisclose200ResponseData.to_json())

# convert the object into a dict
viewing_key_disclose200_response_data_dict = viewing_key_disclose200_response_data_instance.to_dict()
# create an instance of ViewingKeyDisclose200ResponseData from a dict
viewing_key_disclose200_response_data_from_dict = ViewingKeyDisclose200ResponseData.from_dict(viewing_key_disclose200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


