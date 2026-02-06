# DecryptArciumResultRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** |  | 
**viewing_key** | [**DecryptArciumResultRequestViewingKey**](DecryptArciumResultRequestViewingKey.md) |  | 

## Example

```python
from sipher_client.models.decrypt_arcium_result_request import DecryptArciumResultRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptArciumResultRequest from a JSON string
decrypt_arcium_result_request_instance = DecryptArciumResultRequest.from_json(json)
# print the JSON string representation of the object
print(DecryptArciumResultRequest.to_json())

# convert the object into a dict
decrypt_arcium_result_request_dict = decrypt_arcium_result_request_instance.to_dict()
# create an instance of DecryptArciumResultRequest from a dict
decrypt_arcium_result_request_from_dict = DecryptArciumResultRequest.from_dict(decrypt_arcium_result_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


