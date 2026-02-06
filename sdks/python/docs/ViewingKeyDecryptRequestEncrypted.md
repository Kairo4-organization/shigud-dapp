# ViewingKeyDecryptRequestEncrypted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **str** |  | 
**nonce** | **str** |  | 
**viewing_key_hash** | **str** | 0x-prefixed 32-byte hex string | 

## Example

```python
from sipher_client.models.viewing_key_decrypt_request_encrypted import ViewingKeyDecryptRequestEncrypted

# TODO update the JSON string below
json = "{}"
# create an instance of ViewingKeyDecryptRequestEncrypted from a JSON string
viewing_key_decrypt_request_encrypted_instance = ViewingKeyDecryptRequestEncrypted.from_json(json)
# print the JSON string representation of the object
print(ViewingKeyDecryptRequestEncrypted.to_json())

# convert the object into a dict
viewing_key_decrypt_request_encrypted_dict = viewing_key_decrypt_request_encrypted_instance.to_dict()
# create an instance of ViewingKeyDecryptRequestEncrypted from a dict
viewing_key_decrypt_request_encrypted_from_dict = ViewingKeyDecryptRequestEncrypted.from_dict(viewing_key_decrypt_request_encrypted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


