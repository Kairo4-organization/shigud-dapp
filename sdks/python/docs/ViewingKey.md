# ViewingKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | 0x-prefixed 32-byte hex string | 
**path** | **str** |  | 
**hash** | **str** | 0x-prefixed 32-byte hex string | 

## Example

```python
from sipher_client.models.viewing_key import ViewingKey

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKey from a JSON string
viewing_key_instance = ViewingKey.from_json(json)
# print the JSON string representation of the object
print(ViewingKey.to_json())

# convert the object into a dict
viewing_key_dict = viewing_key_instance.to_dict()
# create an instance of ViewingKey from a dict
viewing_key_from_dict = ViewingKey.from_dict(viewing_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


