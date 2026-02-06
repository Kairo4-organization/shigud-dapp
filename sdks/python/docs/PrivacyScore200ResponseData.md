# PrivacyScore200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**grade** | **str** |  | [optional] 
**transactions_analyzed** | **int** |  | [optional] 
**factors** | [**PrivacyScore200ResponseDataFactors**](PrivacyScore200ResponseDataFactors.md) |  | [optional] 
**recommendations** | **List[str]** |  | [optional] 

## Example

```python
from sipher_client.models.privacy_score200_response_data import PrivacyScore200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PrivacyScore200ResponseData from a JSON string
privacy_score200_response_data_instance = PrivacyScore200ResponseData.from_json(json)
# print the JSON string representation of the object
print(PrivacyScore200ResponseData.to_json())

# convert the object into a dict
privacy_score200_response_data_dict = privacy_score200_response_data_instance.to_dict()
# create an instance of PrivacyScore200ResponseData from a dict
privacy_score200_response_data_from_dict = PrivacyScore200ResponseData.from_dict(privacy_score200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


