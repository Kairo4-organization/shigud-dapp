# EncryptIncoValueRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaintext** | [**EncryptIncoValueRequestPlaintext**](EncryptIncoValueRequestPlaintext.md) |  | 
**scheme** | **str** | FHE scheme to use | 
**label** | **str** | Optional label for the encryption | [optional] 

## Example

```python
from sipher_client.models.encrypt_inco_value_request import EncryptIncoValueRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptIncoValueRequest from a JSON string
encrypt_inco_value_request_instance = EncryptIncoValueRequest.from_json(json)
# print the JSON string representation of the object
print(EncryptIncoValueRequest.to_json())

# convert the object into a dict
encrypt_inco_value_request_dict = encrypt_inco_value_request_instance.to_dict()
# create an instance of EncryptIncoValueRequest from a dict
encrypt_inco_value_request_from_dict = EncryptIncoValueRequest.from_dict(encrypt_inco_value_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


