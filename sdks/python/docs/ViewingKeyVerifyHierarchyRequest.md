# ViewingKeyVerifyHierarchyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_key** | [**ViewingKey**](ViewingKey.md) |  | 
**child_key** | [**ViewingKey**](ViewingKey.md) |  | 
**child_path** | **str** |  | 

## Example

```python
from sipher_client.models.viewing_key_verify_hierarchy_request import ViewingKeyVerifyHierarchyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyVerifyHierarchyRequest from a JSON string
viewing_key_verify_hierarchy_request_instance = ViewingKeyVerifyHierarchyRequest.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyVerifyHierarchyRequest.to_json())

# convert the object into a dict
viewing_key_verify_hierarchy_request_dict = viewing_key_verify_hierarchy_request_instance.to_dict()
# create an instance of ViewingKeyVerifyHierarchyRequest from a dict
viewing_key_verify_hierarchy_request_from_dict = ViewingKeyVerifyHierarchyRequest.from_dict(viewing_key_verify_hierarchy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


