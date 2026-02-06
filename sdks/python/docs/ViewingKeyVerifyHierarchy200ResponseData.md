# ViewingKeyVerifyHierarchy200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **bool** |  | [optional] 
**expected_path** | **str** |  | [optional] 
**actual_path** | **str** |  | [optional] 
**parent_hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 
**child_hash** | **str** | 0x-prefixed 32-byte hex string | [optional] 

## Example

```python
from sipher_client.models.viewing_key_verify_hierarchy200_response_data import ViewingKeyVerifyHierarchy200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyVerifyHierarchy200ResponseData from a JSON string
viewing_key_verify_hierarchy200_response_data_instance = ViewingKeyVerifyHierarchy200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyVerifyHierarchy200ResponseData.to_json())

# convert the object into a dict
viewing_key_verify_hierarchy200_response_data_dict = viewing_key_verify_hierarchy200_response_data_instance.to_dict()
# create an instance of ViewingKeyVerifyHierarchy200ResponseData from a dict
viewing_key_verify_hierarchy200_response_data_from_dict = ViewingKeyVerifyHierarchy200ResponseData.from_dict(viewing_key_verify_hierarchy200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


