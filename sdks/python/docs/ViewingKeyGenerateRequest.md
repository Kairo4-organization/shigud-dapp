# ViewingKeyGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Derivation path | [optional] [default to 'm/0']
**label** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.viewing_key_generate_request import ViewingKeyGenerateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyGenerateRequest from a JSON string
viewing_key_generate_request_instance = ViewingKeyGenerateRequest.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyGenerateRequest.to_json())

# convert the object into a dict
viewing_key_generate_request_dict = viewing_key_generate_request_instance.to_dict()
# create an instance of ViewingKeyGenerateRequest from a dict
viewing_key_generate_request_from_dict = ViewingKeyGenerateRequest.from_dict(viewing_key_generate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


