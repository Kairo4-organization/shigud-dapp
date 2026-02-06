# DecryptArciumResult200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** |  | [optional] 
**circuit_id** | **str** |  | [optional] 
**decrypted_output** | **str** |  | [optional] 
**verification_hash** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.decrypt_arcium_result200_response_data import DecryptArciumResult200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptArciumResult200ResponseData from a JSON string
decrypt_arcium_result200_response_data_instance = DecryptArciumResult200ResponseData.from_json(json)
# print the JSON string representation of the object
print(DecryptArciumResult200ResponseData.to_json())

# convert the object into a dict
decrypt_arcium_result200_response_data_dict = decrypt_arcium_result200_response_data_instance.to_dict()
# create an instance of DecryptArciumResult200ResponseData from a dict
decrypt_arcium_result200_response_data_from_dict = DecryptArciumResult200ResponseData.from_dict(decrypt_arcium_result200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


