# EncryptIncoValue200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_id** | **str** |  | [optional] 
**ciphertext** | **str** |  | [optional] 
**scheme** | **str** |  | [optional] 
**noise_budget** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.encrypt_inco_value200_response_data import EncryptIncoValue200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptIncoValue200ResponseData from a JSON string
encrypt_inco_value200_response_data_instance = EncryptIncoValue200ResponseData.from_json(json)
# print the JSON string representation of the object
print(EncryptIncoValue200ResponseData.to_json())

# convert the object into a dict
encrypt_inco_value200_response_data_dict = encrypt_inco_value200_response_data_instance.to_dict()
# create an instance of EncryptIncoValue200ResponseData from a dict
encrypt_inco_value200_response_data_from_dict = EncryptIncoValue200ResponseData.from_dict(encrypt_inco_value200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


