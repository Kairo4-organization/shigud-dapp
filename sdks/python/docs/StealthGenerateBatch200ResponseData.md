# StealthGenerateBatch200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[StealthGenerateBatch200ResponseDataResultsInner]**](StealthGenerateBatch200ResponseDataResultsInner.md) |  | [optional] 
**summary** | [**StealthGenerateBatch200ResponseDataSummary**](StealthGenerateBatch200ResponseDataSummary.md) |  | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_batch200_response_data import StealthGenerateBatch200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateBatch200ResponseData from a JSON string
stealth_generate_batch200_response_data_instance = StealthGenerateBatch200ResponseData.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateBatch200ResponseData.to_json())

# convert the object into a dict
stealth_generate_batch200_response_data_dict = stealth_generate_batch200_response_data_instance.to_dict()
# create an instance of StealthGenerateBatch200ResponseData from a dict
stealth_generate_batch200_response_data_from_dict = StealthGenerateBatch200ResponseData.from_dict(stealth_generate_batch200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


